import CodeBlock from "@/components/CodeBlock";


const pythonCode = `# django-rest-framework
# views.py
class YourView(APIView):
  status_code = 503
  
  url = f"http://relay-it.dev/api/{status_code}"

  
  def get(self, request, format=None):
    """ Your request handler. """

    response = requests.get(f"{self.url}/your-endpoint")

    # if the resource is unavailable
    if response.status_code == 503: #status code we are testing
      return Response(
        {"message": "A dependent service is unavailable"},
        status=status.HTTP_503_SERVICE_UNAVAILABLE)
    
    return Response(status=status.HTTP_200_OK)
`;

const Snippet = () => {
  return (
    <div>
      <h2 className='text-left text-xl text-gray-800 font-semibold mb-2'>
        It&apos;s simple.
      </h2>
      <ul className='list-disc list-inside font-mono mt-2'>
        <li>Use Relay-It and your endpoint</li>
        <li>Define your desired response code</li>
        <li>Build your logic</li>
        <li>Repeat the process</li>
        <li>Replace the Relay-It endpoint with yours.</li>
        <li>Done</li>
      </ul>
      <p className='text-center text-xl text-gray-800 font-semibold mt-6 mb-6'>
        Writing good code shouldn&apos;t be hard. It&apos;s a matter of having
        the right tools for the job.
      </p>
    </div>
  );
};


export default function Backend() {
  return (
    <section className='mx-auto max-w-5xl p-4'>
      <div className='flex flex-col md:flex-row gap-8 '>
        <CodeBlock code={pythonCode} language='python' />
        <Snippet />
      </div>
    </section>
  );
}
