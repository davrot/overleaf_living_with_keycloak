import SymbolPaletteContent from './symbol-palette-content'

export default function SymbolPalette() {
  console.log('SymbolPalette component is rendering');
  const handleSelect = (symbol) => {
    window.dispatchEvent(new CustomEvent('editor:insert-symbol', { detail: symbol }))
  }
  return <SymbolPaletteContent handleSelect={handleSelect} />
}
