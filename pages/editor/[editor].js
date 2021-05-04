import { useRouter } from 'next/router';
import { EditorPage } from 'components/EditorPage';
import editorData from 'utils/editorData';

export default function Editor({ editor }) {
  const router = useRouter();
  if(router.isFallback) return <div>Loading...</div>;
  
  return <EditorPage {...editor} />;
}

export async function getStaticPaths() {
  const names = Object.keys(editorData);
  const editorPaths = names.map(name => {
    return {
      params: {
        editor: name
      }
    };
  });
  return {
    paths: editorPaths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const editor = editorData[params.editor];
  return {
    props: {
      editor
    }
  };
}

