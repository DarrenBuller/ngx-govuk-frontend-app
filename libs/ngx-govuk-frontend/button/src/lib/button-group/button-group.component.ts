import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * A component that groups GOV.UK buttons together with consistent spacing.
 *
 * This component implements the GOV.UK Design System button group pattern.
 * It provides consistent spacing between multiple buttons or links that are grouped together.
 *
 * @example
 * <ngx-govuk-button-group>
 *   <ngx-govuk-button>Save and continue</ngx-govuk-button>
 *   <ngx-govuk-button color="secondary">Cancel</ngx-govuk-button>
 * </ngx-govuk-button-group>
 *
 * The component accepts {@link ngx-govuk-button} components and elements with the {@link govuk-link} class
 * as content through content projection.
 *
 * @see {@link https://design-system.service.gov.uk/components/button/#button-group GOV.UK Button group}
 */
@Component({
  selector: 'ngx-govuk-button-group',
  standalone: true,
  templateUrl: './button-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKButtonGroupComponent {}
