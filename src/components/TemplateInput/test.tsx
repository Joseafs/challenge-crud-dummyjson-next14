import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

import { withThemeProvider } from '~/theme/utils';

import { TemplateInput } from '.';

const mockRandomValues = () => ({
  children: faker.lorem.words(4),
  errorDescription: faker.lorem.words(6),
  label: faker.word.words(2),
  mockFn: jest.fn(),
  value: faker.person.fullName(),
});

describe('TemplateInput', () => {
  test('should show children element', () => {
    const { children: childrenText } = mockRandomValues();
    render(
      withThemeProvider(
        <TemplateInput disabled>
          <div>{childrenText}</div>
        </TemplateInput>,
      ),
    );

    const childrenElement = screen.queryByText(childrenText) as HTMLElement;
    expect(childrenElement).toBeInTheDocument();
  });

  test('should show label element', () => {
    const { children, label } = mockRandomValues();
    render(
      withThemeProvider(
        <TemplateInput disabled label={label}>
          <div>{children}</div>
        </TemplateInput>,
      ),
    );

    const labelElement = screen.queryByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  test.only('should show error element and message', () => {
    const { children, errorDescription } = mockRandomValues();
    render(
      withThemeProvider(
        <TemplateInput elementId="faker" errorDescription={errorDescription} hasError>
          <div>{children}</div>
        </TemplateInput>,
      ),
    );

    const errorElement = document.getElementById(`faker-error`) as HTMLInputElement;

    expect(errorElement).toBeInTheDocument();
    expect(screen.queryByText(errorDescription)).toBeInTheDocument();
  });

  test('should not show error message when error is false and have errorDescription', () => {
    const { children, errorDescription } = mockRandomValues();
    render(
      withThemeProvider(
        <TemplateInput errorDescription={errorDescription}>
          <div>{children}</div>
        </TemplateInput>,
      ),
    );

    expect(screen.queryByText(errorDescription)).not.toBeInTheDocument();
  });

  test('should not show errorElement when hasError is true and errorDescription is empty', () => {
    const { children } = mockRandomValues();
    render(
      withThemeProvider(
        <TemplateInput elementId="faker" hasError>
          <div>{children}</div>
        </TemplateInput>,
      ),
    );

    const errorElement = document.getElementById(`faker-error`) as HTMLInputElement;

    expect(errorElement).not.toBeInTheDocument();
  });
});
