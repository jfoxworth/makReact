import React from 'react';
import LoadingSpinner from './loadingSpinner.component';

interface WithLoadingProps {
  loading: boolean;
}

const loadingSpinnerWrapper = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P & WithLoadingProps> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <LoadingSpinner /> : <Component {...props as P} />
    }
  };

  export default loadingSpinnerWrapper