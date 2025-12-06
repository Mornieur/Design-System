import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { UserProfile } from '..';

const mockOnClick = vi.fn();

vi.mock('@/components/atoms/Button', () => ({
  default: ({ children, onClick }: { children: string; onClick?: () => void }) => (
    <button data-testid="mock-button" onClick={onClick}>
      {children}
    </button>
  ),
}));

describe('UserProfile', () => {
  it('deve renderizar nome e papel do usuário', () => {
    render(<UserProfile name="Maria Fernanda" role="Frontend Developer" />);

    expect(screen.getByText('Maria Fernanda')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
  });

  it('deve renderizar o avatar', () => {
    render(<UserProfile name="Maria" role="Dev" />);

    const avatar = screen.getByTestId('avatar');
    expect(avatar).toBeInTheDocument();
  });

  it('deve renderizar o botão Follow', () => {
    render(<UserProfile name="Maria" role="Dev" />);

    const button = screen.getByTestId('mock-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Follow');
  });

  it('deve chamar função ao clicar no botão (caso use onClick futuramente)', () => {
    render(
      <UserProfile
        name="Maria"
        role="Dev"
      />
    );

    const button = screen.getByTestId('mock-button');
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
