import { ReactNode } from 'react';

export class ErrorBoundary {
  private error: string = '';
  private children: ReactNode;

  constructor() {
    this.componentDidMount();
  }

  private componentDidMount() {
    if (this.error) {
      return (
        <>
          <h1>An error has occured {this.error}</h1>
          {this.children}
        </>
      );
    }
  }
}
