import { asyncHandler } from "../middleware/asyncHandler.js";
import Task from "../models/Task.js";
import { failure, success } from "../utils/ApiResponse.js";

export const getAllTasks = asyncHandler(async (req,res) => {
    const userId = req.user._id;

    const tasks = await Task.find({owner:userId, isVital:false}).sort({createdAt: -1});
    // yesko halka bujhena

    res.status(200).json(success("All tasks fetched successfully.", tasks));
})

export const getTasksById = asyncHandler(async (req,res) => {
    const userId = req.user._id;
    const taskId = req.params.id;

    const task = await Task.findOne({_id:taskId, owner:userId}).populate({path:"owner",select:"-role -email"});
    if (!task) {
        return failure(404, "Task not found.");
    }

    res.status(200).json(success("Task fetched successfully.", task));
})

export const getVitalTasks = asyncHandler(async (req,res) => {
    const userId = req.user._id;

    const tasks = await Task.find({
        owner: userId,
        isVital: true
    }).sort({createdAt: -1});

    if (!tasks || tasks.length === 0) {
    return failure(404, "No vital tasks found.");
    }

    res.status(200).json(success("Vital tasks fetched successfully.", tasks));
})

export const createTask = asyncHandler(async (req,res) => {
    const userId = req.user._id;

    const {title, description, priority, status, dueDate, image}= req.body;

    if (!title || !priority){
        return failure(400, "Title and priority are required.");
    }

    const newTask = await Task.create({
        title,
        description,
        priority,
        status,
        dueDate,
        image,
        owner:userId,
    });
    res.status(201).json(success("Task created successfully.", newTask));
});

export const updateVitalTask = asyncHandler(async (req,res) => {
    const userId = req.user._id;
    const taskId = req.params.id;

    const {title, description, status, dueDate, image} = req.body;

    const tasks = await Task.findByIdAndUpdate(taskId);

 
    if (!tasks){
        return failure(404, "Tasks not found");
    }

     // 2️⃣ Check ownership
    if (tasks.owner.toString() !== userId.toString()) {
        return failure(403, "You are not authorized to update this task.");
    }

    // 3️⃣ Ensure it is a Vital (High priority) task
    if (tasks.priority !== "extreme") {
        return failure(400, "This task is not a vital task.");
    }

    // 4️⃣ Update only provided fields
    if (title) tasks.title = title;
    if (description) tasks.description = description;
    if (status) tasks.status = status;
    if (dueDate) tasks.dueDate = dueDate;
    if (image) tasks.image = image;

    const updatedTask = await tasks.save();

    res.status(200).json(
        success("Vital task updated successfully.", updatedTask)
    );

})

export const toggleVitalTask = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    if (!task) {
        return failure(404, "Task not found.");
    }

    if (task.owner.toString() !== userId.toString()){
        return failure(403, "Unauthorized");
    }

     task.isVital = !task.isVital; // 🔥 TOGGLE
     await task.save();

  res.status(200).json(
    success(
      task.isVital ? "Added to vital tasks ❤️" : "Removed from vital tasks",
      task
    )
  );
})

export const updateTask = asyncHandler(async (req,res) => {
    const userId = req.user._id;
    const taskId = req.params.id;

    const {title, description, priority, status, dueDate, image} = req.body;

    const task = await Task.findById(taskId);

    if (!task){
        return failure(404, "Tasks not found.");
    }

    if (task.owner.toString() !== userId.toString()){
        return failure(403, "You are not authorized to update this task.");
    }

    if (title) task.title = title;
    if (description) task.description = description;
    if (priority) task.priority = priority;
    if (status) task.status = status;
    if (dueDate) task.dueDate = dueDate;
    if (image) task.image = image;

    const updatedTask = await task.save();

    res.status(200).json(success("Task updated successfully.", updatedTask));
})


export const taskStats = asyncHandler(async (req,res) => {
    const userId = req.user._id;

    const tasks = await Task.find({owner:userId});

    if (!tasks || tasks.length === 0){
        res.status(200).json(success("No tasks found."));
    }

    const total = tasks.length;

    const completed = tasks.filter(t => t.status === "Completed").length;
    const inProgress = tasks.filter(t => t.status === "In progress").length;
    const notStarted = tasks.filter(t=>t.status === "Not Started").length;

    const percent = (count) => ((count/total)*100).toFixed(0);

    const completedPercent = percent(completed);
    const inProgressPercent = percent(inProgress);
    const notStartedPercent = percent(notStarted);

    res.status(200).json(success("Task statistics fetched successfully.", {
    total,
    completed,
    inProgress,
    notStarted,
    completedPercent,
    inProgressPercent,
    notStartedPercent,
    }
    ))
})

export const deleteTask = asyncHandler(async (req,res) => {
    const userId = req.user._id;
    const taskId = req.params.id;

    const task = await Task.findById(taskId);
    if (!task){
        return failure(404, "Task not found.");
    }

    if (task.owner.toString() !== userId.toString()){
        return failure(403, "You are not authorized to delete this task.");
    }

    await Task.findByIdAndDelete(taskId);

    res.status(200).json(success("Task deleted successfully."));
}) 