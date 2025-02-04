import clientPromise from '@/lib/mongodb';

export async function POST(request) {
  try {
    const { category, question, answer } = await request.json();

    if (!category || !question || !answer) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db('romanticSpicyDB');
    const collection = db.collection('responses');

    await collection.insertOne({
      category,
      question,
      answer,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ message: 'Response saved successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error saving response:', error);
    return new Response(JSON.stringify({ message: 'Error saving response', error: error.message }), { status: 500 });
  }
}
