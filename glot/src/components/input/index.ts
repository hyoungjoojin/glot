export abstract class InputComponent {
  abstract get up(): boolean;
  abstract get down(): boolean;
  abstract get left(): boolean;
  abstract get right(): boolean;
  abstract get enter(): boolean;
}
