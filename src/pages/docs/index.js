import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Paragraph,
} from "@/components/docs/Markdown";
import { OK_200 } from "@/data/response";
import CodeBlock from "@/components/CodeBlock";
import DocumentationLayout from "@/components/layouts/DocumentationLayout";
import axios from "axios";

const exampleA1 = `import axios from 'axios';

const makeRequest = async () => {

  // const url = 'https://api.github.com';
  // will replace with above url

  const url = 'https://relay-it.dev/api/200';
  axios
    .get("\$\{url\}\/users/randyglasgow")
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};
`;

export default function Documentation() {
  // with cross origin request

  return (
    <DocumentationLayout title='Getting Started'>
      <>
        <Paragraph>Welcome to the Relay-It documentation!</Paragraph>
        <Paragraph>
          This documentation is intended to help you get started with Relay-It
          quickly so you can get back to building your app.
        </Paragraph>

        <Heading2>What this app does....</Heading2>

        <Paragraph>
          It&apos;s pretty simple, in the day and age of the internet,
          microservices are becoming more and more common. This means you need a
          more intuitive way to build your application. Even if the microservice
          isn&apos;t available yet. Relay-It gives you the flexability to build
          your app without wating on the microservice to be available.
        </Paragraph>

        <Heading3>What is Relay-It?</Heading3>
        <Paragraph>
          Relay-It is a tool that allows you to mock your API calls in real
          time.
        </Paragraph>

        <Heading3>Here Let me show you!</Heading3>
        <Paragraph>
          We have an endpoint we want to access but it has not been created yet.
          All we need to do is change the url we are calling to{" "}
          <strong>relay-it.dev</strong>
        </Paragraph>
        <CodeBlock language='javascript' code={exampleA1} />
        <CodeBlock language='json' code={JSON.stringify(OK_200, null, 2)} />
        <Paragraph>
          That&apos;s it! We have a simple way to make a request that mocks the
          response we asked for. All the endpoints come with default responses
          that tell you what the response is and what it means.
        </Paragraph>
        <Paragraph>
          The idea is to create a simple, yet powerful, way to build your
          application. Take some time and explore the documentation to get a feel for how it works.
        </Paragraph>
      </>
    </DocumentationLayout>
  );
}
