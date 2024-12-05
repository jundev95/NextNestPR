// app/api-test/page.tsx

import { api } from '@/common/connect/api';

interface TestResponse {
  content: string;
}

interface NewTestRequest {
  content: string;
}

const ApiTestPage = async (): Promise<JSX.Element> => {
  // GET 요청: 테스트 데이터 가져오기
  const { data: getData } = await api<TestResponse>('/tests');

  // POST 요청: 새로운 테스트 데이터 생성
  const { data: postData } = await api<TestResponse>('/tests', {
    method: 'POST',
    body: {
      content: 'New content from POST request',
    } as NewTestRequest,
  });

  return (
    <div>
      <h1>API Test Page</h1>

      <h2>GET 요청 결과:</h2>
      <ul>Content: {getData.content}</ul>

      <h2>POST 요청 결과:</h2>
      <p>Content: {postData.content}</p>
    </div>
  );
};

export default ApiTestPage;
