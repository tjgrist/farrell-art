import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const VERCEL_DEPLOY_HOOK = process.env.VERCEL_DEPLOY_HOOK;
    
    if (!VERCEL_DEPLOY_HOOK) {
      throw new Error('VERCEL_DEPLOY_HOOK is not set');
    }

    const response = await fetch(VERCEL_DEPLOY_HOOK, { method: 'POST' });
    
    if (!response.ok) {
      throw new Error(`Deploy hook responded with ${response.status}`);
    }

    return NextResponse.json({ message: 'Redeploy triggered successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error triggering redeploy:', error);
    return NextResponse.json({ message: 'Failed to trigger redeploy.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'This endpoint only accepts POST requests.' }, { status: 405 });
}