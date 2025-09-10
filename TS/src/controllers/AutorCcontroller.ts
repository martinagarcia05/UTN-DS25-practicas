import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postAutor = async (req: Request, res: Response) =>{
    const { nomYap, nacimiento } = req.body;
    try {
    const nuevo = await prisma.autor.create({
        data: { 
            nomYap, 
            nacimiento: new Date(nacimiento) 
        }
    });
    res.status(200).json({message: 'newAutor', nuevo});
    } catch (error) {
    res.status(400).json({ error: "Error al crear el autor" });
  }
}