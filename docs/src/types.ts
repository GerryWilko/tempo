export type FunctionRef = {
  function: string
  arguments: Array<{ name: string; type: string; comment?: string }>
  overload?: Array<{ name: string; type: string; comment?: string }>
  return: string
  wrapper?: boolean
}
