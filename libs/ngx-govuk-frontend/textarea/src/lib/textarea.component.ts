import { NgClass } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import {
  GovUKCommonFormInputDirective,
  injectNgControl,
  inputCommonInputs,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';

/**
 * This component implements the GOV.UK Design System textarea component.
 * It allows users to enter multiple lines of text.
 *
 * @see https://design-system.service.gov.uk/components/textarea/
 */
@Component({
  selector: 'ngx-govuk-textarea',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: GovUKCommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKTextareaComponent implements OnInit {
  readonly ngControl = injectNgControl();
  readonly commonFormInput = inject(GovUKCommonFormInputDirective);

  private readonly destroyRef = inject(DestroyRef);

  readonly rows = input(2);
  readonly maxLength = input<number | null>(null);
  readonly showCharacterCount = input(false, { transform: booleanAttribute });

  private readonly currentLength: WritableSignal<number> = signal(0);
  private readonly remainingCharacters = computed(() => {
    const maxLength = this.maxLength();
    return maxLength === null ? null : maxLength - this.currentLength();
  });

  readonly characterCountMessage = computed(() => {
    const remaining = this.remainingCharacters();

    if (this.maxLength() === null || remaining === null) {
      return null;
    }

    if (remaining < 0) {
      const overLimit = Math.abs(remaining);
      return `You have ${overLimit} ${overLimit === 1 ? 'character' : 'characters'} too many`;
    }

    return `You have ${remaining} ${remaining === 1 ? 'character' : 'characters'} remaining`;
  });

  ngOnInit(): void {
    this.ngControl.valueChanges
      ?.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.currentLength.set(value.length));
  }
}
