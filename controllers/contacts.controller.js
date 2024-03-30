export const getAllContacts = (req, res) => {
  res.status(200).json({ message: "All contacts fetched!!" });
};

export const getContact = (req, res) => {
  res.status(200).json({ message: `Contact with id: ${req.params.id}` });
};

export const createContact = (req, res) => {
  console.log("body:", req.body);
  res.status(200).json({ message: "contact created!!" });
};

export const updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Contact updated for the id ${req.params.id}` });
};

export const deleteContact = (req, res) => {
  res.status(200).json({ message: `contact deleted for id: ${req.params.id}` });
};
