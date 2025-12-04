import prisma from "../prismaClient.js";

export const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};

export const getUserById = async (req, res) => {
  const id = Number(req.params.id);

  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) return res.status(404).json({ error: "User not found" });

  res.status(200).json(user);
};

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: { name, email, password },
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: "Email already exists" });
  }
};

export const updateUser = async (req, res) => {
  const id = Number(req.params.id);
  const { name, email, password } = req.body;

  try {
    const updated = await prisma.user.update({
      where: { id },
      data: { name, email, password },
    });

    res.status(200).json(updated);
  } catch {
    res.status(404).json({ error: "User not found" });
  }
};

export const deleteUser = async (req, res) => {
  const id = Number(req.params.id);

  try {
    await prisma.user.delete({ where: { id } });

    res.status(200).json({ message: "User deleted" });
  } catch {
    res.status(404).json({ error: "User not found" });
  }
};
