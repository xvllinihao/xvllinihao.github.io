import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    return NextResponse.json({
      frontmatter,
      content
    });
  } catch (error) {
    console.error('Error reading article:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 