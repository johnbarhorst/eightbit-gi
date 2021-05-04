import { useRouter } from 'next/router';
import { EditorPage } from 'components/EditorPage';

export default function Editor() {
  const router = useRouter();
  if(!router.query.editor) return <div>Loading...</div>;
  const { editor } = router?.query;
  return <EditorPage editor={editor} />;
}