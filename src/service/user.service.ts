import {z} from 'zod'
import bcrypt from 'bcrypt'

//Valida dados do usuario antes de utilizar o Post
export const UserSchema = z.object({
    name: z.string().min(8, "Nome deve ter no mínimo 8 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});


//Cria um hash para a senha
export async function criarHash(senha: string): Promise<string> {
  const saltRounds = 10;
  const hash = await bcrypt.hash(senha, saltRounds);
  return hash;
}