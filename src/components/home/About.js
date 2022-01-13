import styles from "@/styles/About.module.css";
import Link from "next/link";
import CodeBlock from "../CodeBlock";

const pythonCode = `# django-rest-framework
# views.py
class YourView(APIView):

  url = http://relay-it.com/api/<:status_code>
  
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

export default function About() {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Developing code is hard.</h2>

      <blockquote className={styles.quote}>
        <p>
          Don&apos;t waste your time hard coding response types. Instead, write
          code that makes sense in the context of your application. Use your
          endpoints, your data, and your logic; Let us handle the{" "}
          <Link href={"/docs"}>
            <a className={styles.callout}>REST</a>
          </Link>
          .
        </p>
      </blockquote>
      <div className={styles.gridContainer}>
        <CodeBlock code={pythonCode} language='python' />
        <div className={styles.colLeft}>
          As more services are added to your application, you will need to
          manage how you respond to their status codes.
          <ul className={styles.list}>
            <li className={styles.listItem}>Are they up?</li>
            <li className={styles.listItem}>Are they down?</li>
            <li className={styles.listItem}>Are they unavailable?</li>
            <li className={styles.listItem}>
              How about authentication issues?
            </li>
          </ul>
          These all need to be handled in some way to fail gracefully. Writing
          code that accounts for all of these cases is especially hard when you
          have to deal with multiple services. Relay it solves this problem by
          providing a single endpoint that you can use to handle all of your
          status codes regardless of the endpoint. Just pass the desired code
          prepended to your endpoint and Realy It will handle the rest.
        </div>
      </div>
      <p></p>
    </section>
  );
}
