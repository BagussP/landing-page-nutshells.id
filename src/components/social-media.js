
import { Facebook, Instagram, Linkedin, Twitter } from './icon-social-media'

export default function SocialMedia() {
  return (
    <div className="fixed right-5 z-20 top-1/2 -translate-y-1/2 flex flex-col gap-6">
      <Facebook className="rotate-0 w-6 h-6" fill="#121212" />
      <Instagram className="rotate-0 w-6 h-6" fill="#121212" />
      <Linkedin className="rotate-0 w-6 h-6" fill="#121212" />
      <Twitter className="rotate-0 w-6 h-6" fill="#121212" />
    </div>
  );
}
