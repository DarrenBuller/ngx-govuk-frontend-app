import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { GovUKBreadcrumbDirective } from './breadcrumb/breadcrumb.directive';

/**
 * A breadcrumbs component following the GovUK Design System
 *
 * The breadcrumbs component helps users to understand where they are
 * within a website’s structure and move between levels.
 *
 * @example
 * <ngx-govuk-breadcrumbs>
 *   <ngx-govuk-breadcrumb link="page-one" label="Page One" />
 *   <ngx-govuk-breadcrumb link="page-two" label="Page Two" />
 * </ngx-govuk-breadcrumbs>
 *
 * @see {@link https://design-system.service.gov.uk/components/breadcrumbs/} GOV.UK Breadcrumbs
 */
@Component({
  selector: 'ngx-govuk-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovUKBreadcrumbsComponent {
  readonly items = contentChildren(GovUKBreadcrumbDirective);
}
