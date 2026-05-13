export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.();
    const { name, email, phone, vanModel, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const inquiry = await prisma.contactInquiry.create({
      data: {
        name: String(name ?? ''),
        email: String(email ?? ''),
        phone: String(phone ?? ''),
        vanModel: String(vanModel ?? ''),
        message: String(message ?? ''),
        status: 'new',
      },
    });

    return NextResponse.json({ success: true, id: inquiry?.id ?? '' }, { status: 201 });
  } catch (error: any) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Contact API is running' });
}
