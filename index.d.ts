interface Options {
  lowerCase?: boolean;
  compace?: boolean;
}

interface NxStatic {
  headerNormalize(obj: Record<string, any>, options?: Options): Record<string, string>;
}
