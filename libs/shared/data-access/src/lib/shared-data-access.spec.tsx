import { render } from '@testing-library/react';

import SharedDataAccess from './shared-data-access';

describe('SharedDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
