import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createRef, type FormEvent, type RefObject} from 'react';
import {describe, expect, it, vi} from 'vitest';
import Radio from '@/components/atoms/Radio';
import RadioGroup from '..';

describe('RadioGroup', () => {
  it('renders a native fieldset with legend and children', () => {
    render(
      <RadioGroup legend="Release channel">
        <Radio name="channel" value="email" label="Email" />
      </RadioGroup>
    );

    expect(screen.getByRole('group', {name: 'Release channel'})).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('forwards ref to the native fieldset', () => {
    const ref = createRef<HTMLFieldSetElement>();

    render(
      <RadioGroup ref={ref} legend="Ref group">
        <Radio name="channel" value="email" label="Email" />
      </RadioGroup>
    );

    expect(ref.current).toBe(screen.getByRole('group', {name: 'Ref group'}));
  });

  it('passes className, style, data attributes, and fieldset props to the root', () => {
    render(
      <RadioGroup
        legend="Styled group"
        className="custom-group"
        style={{width: 420}}
        data-testid="radio-group"
        data-scope="consumers"
        name="deliveryPreferences"
        form="preferences-form"
      >
        <Radio name="channel" value="email" label="Email" />
      </RadioGroup>
    );

    const group = screen.getByTestId('radio-group');

    expect(group).toHaveClass('custom-group');
    expect(group).toHaveStyle({width: '420px'});
    expect(group).toHaveAttribute('data-scope', 'consumers');
    expect(group).toHaveAttribute('name', 'deliveryPreferences');
    expect(group).toHaveAttribute('form', 'preferences-form');
  });

  it('associates helper text through aria-describedby', () => {
    render(
      <RadioGroup
        legend="Notification priority"
        helperText="Keep the same name on the radios so the browser preserves exclusivity."
      >
        <Radio name="priority" value="standard" label="Standard" />
        <Radio name="priority" value="high" label="High" />
      </RadioGroup>
    );

    expect(screen.getByRole('group', {name: 'Notification priority'})).toHaveAccessibleDescription(
      'Keep the same name on the radios so the browser preserves exclusivity.'
    );
  });

  it('associates error text and marks the group invalid', () => {
    render(
      <RadioGroup legend="Account plan" errorMessage="Choose one account plan before continuing.">
        <Radio name="plan" value="starter" label="Starter" />
        <Radio name="plan" value="growth" label="Growth" />
      </RadioGroup>
    );

    const group = screen.getByRole('group', {name: 'Account plan'});

    expect(group).toHaveAttribute('aria-invalid', 'true');
    expect(group).toHaveAccessibleDescription('Choose one account plan before continuing.');
  });

  it('keeps helper text associated when error text is present', () => {
    render(
      <RadioGroup
        legend="Deployment approval"
        helperText="Choose the path used for this rollout."
        errorMessage="An approval path is required."
      >
        <Radio name="approvalPath" value="engineering" label="Engineering" />
        <Radio name="approvalPath" value="compliance" label="Compliance" />
      </RadioGroup>
    );

    expect(screen.getByRole('group', {name: 'Deployment approval'})).toHaveAccessibleDescription(
      'Choose the path used for this rollout. An approval path is required.'
    );
  });

  it('supports invalid without requiring an error message', () => {
    render(
      <RadioGroup legend="Invalid group" invalid>
        <Radio name="channel" value="email" label="Email" />
      </RadioGroup>
    );

    expect(screen.getByRole('group', {name: 'Invalid group'})).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });

  it('preserves user supplied aria-invalid when not invalid internally', () => {
    render(
      <RadioGroup legend="Grammar group" aria-invalid="grammar">
        <Radio name="channel" value="email" label="Email" />
      </RadioGroup>
    );

    expect(screen.getByRole('group', {name: 'Grammar group'})).toHaveAttribute(
      'aria-invalid',
      'grammar'
    );
  });

  it('preserves user supplied aria-describedby with helper text', () => {
    render(
      <>
        <p id="external-description">External group description.</p>
        <RadioGroup
          legend="With external description"
          aria-describedby="external-description"
          helperText="Internal helper."
        >
          <Radio name="channel" value="email" label="Email" />
        </RadioGroup>
      </>
    );

    expect(
      screen.getByRole('group', {name: 'With external description'})
    ).toHaveAccessibleDescription('External group description. Internal helper.');
  });

  it('supports disabled fieldset semantics without replacing child focus targets', () => {
    render(
      <RadioGroup legend="Disabled group" disabled>
        <Radio name="channel" value="email" label="Email" />
        <Radio name="channel" value="slack" label="Slack" />
      </RadioGroup>
    );

    expect(screen.getByRole('group', {name: 'Disabled group'})).toBeDisabled();
    expect(screen.getByLabelText('Email')).toBeDisabled();
    expect(screen.getByLabelText('Slack')).toBeDisabled();
  });

  it('keeps required semantics on the radios instead of inventing group-level required behavior', () => {
    render(
      <RadioGroup legend="Required group">
        <Radio name="channel" value="email" label="Email" required />
        <Radio name="channel" value="slack" label="Slack" required />
      </RadioGroup>
    );

    expect(screen.getByRole('radio', {name: /^Email/})).toBeRequired();
    expect(screen.getByRole('radio', {name: /^Slack/})).toBeRequired();
  });

  it('supports horizontal orientation without adding a redundant role', () => {
    render(
      <RadioGroup legend="Horizontal group" orientation="horizontal">
        <Radio name="channel" value="email" label="Email" />
        <Radio name="channel" value="slack" label="Slack" />
      </RadioGroup>
    );

    const group = screen.getByRole('group', {name: 'Horizontal group'});

    expect(group).not.toHaveAttribute('role');
  });

  it('preserves native exclusivity and form submission when radios share the same name', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn((event: FormEvent<HTMLFormElement>) => event.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <RadioGroup legend="Release channel">
          <Radio name="releaseChannel" value="email" label="Email" defaultChecked />
          <Radio name="releaseChannel" value="slack" label="Slack" />
          <Radio name="releaseChannel" value="pager" label="Pager" />
        </RadioGroup>
        <button type="submit">Submit release channel</button>
      </form>
    );

    const emailRadio = screen.getByLabelText('Email');
    const slackRadio = screen.getByLabelText('Slack');

    expect(emailRadio).toBeChecked();
    expect(slackRadio).not.toBeChecked();

    await user.click(slackRadio);

    expect(slackRadio).toBeChecked();
    expect(emailRadio).not.toBeChecked();

    slackRadio.focus();
    await user.keyboard('[Space]');

    expect(slackRadio).toHaveFocus();
    expect(slackRadio).toBeChecked();

    await user.click(screen.getByRole('button', {name: 'Submit release channel'}));

    expect(handleSubmit).toHaveBeenCalledOnce();

    const form = screen.getByRole('button', {name: 'Submit release channel'}).closest('form');
    const formData = new FormData(form as HTMLFormElement);

    expect(formData.get('releaseChannel')).toBe('slack');
  });

  it('preserves keyboard interaction on the radios inside the group', async () => {
    const user = userEvent.setup();

    render(
      <RadioGroup legend="Keyboard group">
        <Radio name="channel" value="email" label="Email" />
        <Radio name="channel" value="slack" label="Slack" />
      </RadioGroup>
    );

    const radio = screen.getByLabelText('Email');

    radio.focus();
    await user.keyboard('[Space]');

    expect(radio).toBeChecked();
  });

  it('does not leak transient orientation props to the DOM', () => {
    const fieldsetRefCheck: RefObject<HTMLFieldSetElement | null> = {current: null};

    render(
      <RadioGroup legend="Transient group" orientation="horizontal" ref={fieldsetRefCheck}>
        <Radio name="channel" value="email" label="Email" />
      </RadioGroup>
    );

    expect(screen.getByRole('group', {name: 'Transient group'})).not.toHaveAttribute(
      '$orientation'
    );
  });
});
