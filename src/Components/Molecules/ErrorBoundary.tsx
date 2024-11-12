import React from 'react';
import { FallbackProps } from 'react-error-boundary';

interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallbackComponent: React.ComponentType<FallbackProps>;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Caught an error:", error, errorInfo);
    }

    resetErrorBoundary = () => {
        this.setState({ hasError: false, error: null });
    };

    render(): React.ReactNode {
        const { hasError, error } = this.state;
        const { children, fallbackComponent: FallbackComponent } = this.props;

        if (hasError && error) {
            return <FallbackComponent error={error} resetErrorBoundary={this.resetErrorBoundary} />;
        }

        return children;
    }
}

export default ErrorBoundary;
