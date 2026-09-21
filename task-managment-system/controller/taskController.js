import Task from '../model/task.js';
export const createTask = async(req, res, next) => {
    try {
            const task = await Task.create({
              ...req.body,
              createdBy: req.user._id,
            });
        res.status(201).json(task);

    } catch (error) {
        next(error)
    }
}