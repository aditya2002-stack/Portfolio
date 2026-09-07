import { profile } from "@/data/profile";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border-soft">
      <Container className="flex items-center justify-center text-xs text-ink-faint font-mono">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
