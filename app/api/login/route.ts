import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const user = await prisma.user.findFirst({
    where: {
      userId: username,
      password: password,
    },
  });
  console.log('LoginUser:' + JSON.stringify(user));

  // ユーザーが存在しない or パスワードが間違っている場合はエラー
  if (!user) {
    return NextResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }
  return NextResponse.json({ message: 'Login successful', user: user });
}
