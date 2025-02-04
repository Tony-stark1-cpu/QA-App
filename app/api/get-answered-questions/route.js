import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('romanticSpicyDB');
    const responses = await db.collection('responses').find({}, { projection: { _id: 0, question: 1 } }).toArray();

    const answeredQuestions = responses.map((res) => res.question);

    return new Response(JSON.stringify({ answeredQuestions }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error fetching answered questions', error: error.message }), { status: 500 });
  }
}
