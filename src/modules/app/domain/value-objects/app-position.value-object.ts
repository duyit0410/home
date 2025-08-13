import { ValueObject } from "@/shared/core/domain-base/entities";
import { ArgumentInvalidException } from "@/shared/core/exceptions";

export interface IAppPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class AppPositionProvider extends ValueObject<IAppPosition> {
  protected validate(props: IAppPosition): void {
    const APP_POSITION_LENGTH = 4;
    const niceAppKeyPosition =
      Object.keys(props).length === APP_POSITION_LENGTH;

    if (!niceAppKeyPosition) {
      throw new ArgumentInvalidException(
        `AppPosition phải có đúng ${APP_POSITION_LENGTH} thuộc tính`
      );
    }

    if (props.x < 0) {
      throw new ArgumentInvalidException("X không được bé hơn 0");
    }
    if (props.y < 0) {
      throw new ArgumentInvalidException("Y không được bé hơn 0");
    }
    if (props.width <= 0) {
      throw new ArgumentInvalidException("Width không được bé hơn 0");
    }
    if (props.height <= 0) {
      throw new ArgumentInvalidException("Height không được bé hơn 0");
    }
  }
}
