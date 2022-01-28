import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  moduleName: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    sendErrorToServer(this.props.moduleName, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong...</h1>;
    }

    return this.props.children;
  }
}

function sendErrorToServer(moduleName: string, errorInfo: ErrorInfo) {
  fetch('/errorlog', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ message: errorInfo, info: moduleName }),
  });
}
