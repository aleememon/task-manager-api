module.exports = {
  getTasks: jest.fn((req, res) => {
    res.status(200).json([]);  
  }),
  createTask: jest.fn((req, res) => {
    res.status(201).json({
      _id: "mockedId123",
      title: req.body.title,
      description: req.body.description,
    });
  }),
  getTaskById: jest.fn(),
  TaskDeleteById: jest.fn(),
  TaskUpdateById: jest.fn(),
};
