import { expect } from 'chai'
import symlink from '../src/symlink'

describe('symlink()', () => {
  it('Should return single substitutions', () => {
    const input = [
      1,
      '/home/private/documents:/stuff/urgent/docs',
      '/home/private/documents/office',
    ]

    expect(symlink(input)).to.equal('/stuff/urgent/docs/office')
  })

  it('Should return series of substitutions', () => {
    const input = [
      3,
      '/bin:/usr/bin',
      '/usr/bin:/usr/local/bin',
      '/usr/local/bin/log:/var/log-2017',
      '/bin/log/lib'
    ]
    expect(symlink(input)).to.equal('/var/log-2017/lib')
  })
})