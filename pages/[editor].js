import { useRouter } from 'next/router';
import { EditorPage } from 'components/EditorPage';
import { editorData } from 'editorData';

export default function Editor() {
  const router = useRouter();
  const { editor } = router.query;
  return <EditorPage {...editorData[editor]} />;
}