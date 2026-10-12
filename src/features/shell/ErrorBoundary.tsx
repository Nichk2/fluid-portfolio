import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Route-level safety net. Without this, an uncaught render error anywhere
 * in a page (e.g. an i18next translation that hasn't finished loading yet)
 * unmounts the entire app, leaving a blank screen with no way to recover.
 */
class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Route render error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-6">
          <p className="text-2xl font-display italic text-foreground mb-4">
            Something went wrong.
          </p>
          <a href="." className="text-primary hover:text-accent transition-colors duration-300 font-body">
            Reload the page
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
