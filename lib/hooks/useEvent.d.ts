interface SignalLike {
	Connect(callback: (...args: Array<unknown>) => void): unknown;
}

type InferSignalParameters<S> = S extends SignalLike ? Parameters<Parameters<S["Connect"]>[0]> : never;

declare function useEvent<I extends Instance, E extends InstanceEventNames<I>>(
	instance: I,
	event: E,
): IterableFunction<LuaTuple<[index: number, ...rest: InferSignalParameters<InstanceEvents<I>[E]>]>>;

declare function useEvent<E extends SignalLike>(
	discriminator: unknown,
	event: E,
): IterableFunction<LuaTuple<[index: number, ...rest: InferSignalParameters<E>]>>;

export = useEvent;
