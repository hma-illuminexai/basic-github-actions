import { render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

import GreetingComponent from './GreetingComponent';

import { expect, describe, test } from 'vitest';

describe('GreetingComponent', () => {
  
  test('toggles greeting on button click', async () => {

    const user = userEvent.setup();

    const container = render(<GreetingComponent />);
    const button = container.getByText('Toggle Greeting');

    await user.click(button);

    const found = container.getByText('Bye');
    expect(found).toBeInTheDocument();
  });
});