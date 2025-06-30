import { Metadata } from 'next'
import ResumeContent from "../component/ResumeContent";

export const metadata: Metadata = {
  title: 'Resume - Li no Shinobi',
} 

export default function Resume() {
  return <ResumeContent />;
}
