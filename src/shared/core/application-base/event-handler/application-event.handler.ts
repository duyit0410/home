import type { DomainEvent } from "../../domain-base/events";

export interface ApplicationEventHandler<IDomainEvent extends DomainEvent, Response = unknown> {
  handle(domainEvent: IDomainEvent): Promise<Response> | Response
}
