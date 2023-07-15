import { renderHook } from '@testing-library/react';
import { useRandomId } from './useRandomId';

describe('useRandomId hook', () => {
  it('should return a random id without prefix', () => {
    // when
    const { result } = renderHook(() => useRandomId());
    const id = result.current;

    // then
    expect(id).toMatch(/^[a-z0-9]{7}$/);
  });

  it('should return a random id with prefix', () => {
    // given
    const { result, rerender } = renderHook((props) => useRandomId(props), {
      initialProps: 'prefix',
    });
    const id = result.current;
    expect(id).toMatch(/^prefix-[a-z0-9]{7}$/);

    // when
    rerender('new-prefix');
    const newId = result.current;

    // then
    expect(newId).toMatch(/^new-prefix-[a-z0-9]{7}$/);
    expect(newId).not.toEqual(id);
  });

  it('should return the same id for the same prefix', () => {
    // given
    const { result, rerender } = renderHook((props) => useRandomId(props), {
      initialProps: 'prefix',
    });
    const id = result.current;
    expect(id).toMatch(/^prefix-[a-z0-9]{7}$/);

    // when
    rerender('prefix');
    const newId = result.current;

    // then
    expect(newId).toEqual(id);
  });
});
