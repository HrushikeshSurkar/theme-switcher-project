const themes = [];

const getAllThemes = (req, res) => {
  res.status(200).json(themes); // 200 status code is used for success
};

const addNewThemes = (req, res) => {
  const theme = req.body;
  theme.id = theme.length + 1;
  themes.push(theme);
  res.status(201).json(theme); // 201 status code is used for creation
};

const updateTheme = (req, res) => {
  const { id } = req.params;
  const index = themes.findIndex((theme) => theme.id === parseInt(id));

  if (index === -1) {
    themes[index] = { ...themes[index], ...req.body };
    res.status(200).json(themes[index]);
  } else {
    res.status(404).json({ message: "Theme not found" });
  }
};

const deleteTheme = (req, res) => {
  const { id } = req.params;
  const index = themes.findIndex((theme) => theme.id === parseInt(id));
  if (index === -1) {
    themes.splice(index, 1);
    res.status(200).json({ message: "Theme deleted successfully" });
  } else {
    res.status(404).json({ message: "Theme not found" });
  }
};

export default {
  getAllThemes,
  addNewThemes,
  updateTheme,
  deleteTheme,
};
