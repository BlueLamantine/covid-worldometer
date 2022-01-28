import { ComponentType, Suspense } from 'react';
import { Loading } from '../components/Loading';

export function withSuspense<P>(WrappedComponent: ComponentType<P>) {
    const componentWithSuspense = (props: P) => {
        return (
            <Suspense fallback={<Loading />}>
                <WrappedComponent {...props} />
            </Suspense>
        );
    };

    return componentWithSuspense;
}
