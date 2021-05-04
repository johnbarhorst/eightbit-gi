import { useRouter } from 'next/router';
import { EditorPage } from 'components/EditorPage';

export default function Editor() {
  const router = useRouter();
  const { editor } = router.query;
  return <EditorPage editor={editor} />;
}