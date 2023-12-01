export const checkImage = (file) => {
  let err = ''

  if (!file) {
    err = 'Imagen no encontrada'
    return err
  }

  if (file.size > 1024 * 1024) {
    err = 'El archivo es demasiado grande, debe de ser menor a 1mb.'
    return err
  }

  if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
    err = 'El tipo de archivo no es soportado'
    return err
  }
}
