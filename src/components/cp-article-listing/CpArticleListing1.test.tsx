// CpArticleListing.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CpArticleListing from './cpArticleListing';

// Mock fetch function
const mockFetch = jest.fn().mockResolvedValue({
  json: () =>
    Promise.resolve({
      results: [
        {
          title: 'Mock Article',
          source: 'Mock Source',
          published_date: '2024-07-16',
          url: 'https://example.com',
          abstract: 'Mock article abstract',
          media: [
            {
              type: 'image',
              'media-metadata': [
                {
                  url: 'https://example.com/image.jpg',
                  height: 300,
                  width: 400,
                },
              ],
            },
          ],
        },
      ],
    }),
});

// Assign mockFetch to global.fetch with custom typing
global.fetch = mockFetch as jest.Mock;

describe('CpArticleListing Component', () => {
  afterEach(() => {
    // Clear mock and reset fetch after each test
    mockFetch.mockClear();
  });

  it('renders loading state initially', () => {
    render(<CpArticleListing />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('fetches and renders articles correctly', async () => {
    render(<CpArticleListing />);

    // Wait for the component to finish rendering
    await screen.findByText('Mock Article');

    // Check if the article title and details are rendered correctly
    expect(screen.getByText('Mock Article')).toBeInTheDocument();
    expect(screen.getByText('Mock Source')).toBeInTheDocument();
    expect(screen.getByText('2024-07-16')).toBeInTheDocument();
    expect(screen.getByText('Mock article abstract')).toBeInTheDocument();

    // Check if the image is rendered
    const articleImage = screen.getByAltText('Mock Article') as HTMLImageElement;
    expect(articleImage).toBeInTheDocument();
    expect(articleImage.src).toBe('https://example.com/image.jpg');

    // Check if links open in new tab
    const articleLink = screen.getByText('Mock Article');
    expect(articleLink).toHaveAttribute('target', '_blank');
  });

  it('renders "No articles found" when no articles are fetched', async () => {
    // Mock fetch to return empty results
    mockFetch.mockResolvedValueOnce({
      json: () => Promise.resolve({ results: [] }),
    });

    render(<CpArticleListing />);

    // Wait for the component to finish rendering
    await screen.findByText('No articles found');
  });

  it('handles API fetch error', async () => {
    // Mock fetch to throw an error
    mockFetch.mockRejectedValueOnce(new Error('Fetch failed'));

    render(<CpArticleListing />);

    // Wait for the component to finish rendering
    await screen.findByText('No articles found');
  });
});
