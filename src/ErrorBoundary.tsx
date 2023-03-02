import { Component, ReactNode } from "react";

interface Props {
  message?: string;
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>{this.props.message || "Something went wrong"}</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
