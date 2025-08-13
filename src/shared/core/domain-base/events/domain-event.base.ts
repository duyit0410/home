import { generatePrefixId } from '@/shared/core/helpers'
import { UniqueEntityID } from '../entities'
import { ArgumentNotProvidedException } from '../../exceptions'

type DomainEventMetadata = {
  /** Timestamp when this domain event occurred */
  readonly timestamp: number
}

export type IDomainEvent<T> = Omit<T, 'id' | '_metadata'> & {
  _metadata: DomainEventMetadata
  aggregateId: UniqueEntityID
}

export abstract class DomainEvent {
  readonly id: UniqueEntityID
  readonly aggregateId: UniqueEntityID
  readonly _metadata: DomainEventMetadata

  constructor(domainEvent: IDomainEvent<unknown>) {
    if (!domainEvent) {
      throw new ArgumentNotProvidedException('Domain event props should not be empty')
    }

    if (!domainEvent._metadata || !domainEvent._metadata.timestamp) {
      throw new ArgumentNotProvidedException(
        'Timestamp should be provided in domain event metadata'
      )
    }

    this.id = new UniqueEntityID(generatePrefixId('de'))
    this.aggregateId = domainEvent.aggregateId
    this._metadata = {
      timestamp: domainEvent._metadata.timestamp,
    }
  }
}
